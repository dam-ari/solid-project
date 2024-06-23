import { createSignal, For, JSX, onMount } from "solid-js";
import MarkdownIt from "markdown-it";
import { getHighlighter } from "shiki";

type Note = {
  content: string;
  date: Date;
  name: string;
};

const ProjectsModal = (): JSX.Element => {
  const [notes, setNotes] = createSignal<Note[]>([]);
  const [editorVisible, setEditorVisible] = createSignal(false);
  const [currentNote, setCurrentNote] = createSignal<{ index: number; content: string }>({ index: -1, content: "" });
  const [sortBy, setSortBy] = createSignal<string>("date");
  const md = new MarkdownIt();

  const loadNotes = async () => {
    const storedNotes = await fetchNotesFromFile();
    setNotes(storedNotes);
    await renderNotes(storedNotes);
  };

  const fetchNotesFromFile = async (): Promise<Note[]> => {
    return [
      { content: "note1 content", date: new Date(), name: "note1" },
      { content: "note2 content", date: new Date(), name: "note2" },
      { content: "note3 content", date: new Date(), name: "note3" },
    ];
  };

  const saveNote = async () => {
    let updatedNotes = [...notes()];
    if (currentNote().index >= 0) {
      updatedNotes[currentNote().index].content = currentNote().content;
    } else {
      updatedNotes.push({ content: currentNote().content, date: new Date(), name: `note${updatedNotes.length + 1}` });
    }
    setNotes(updatedNotes);
    setEditorVisible(false);
    setCurrentNote({ index: -1, content: "" });
    await renderNotes(updatedNotes);

    console.log("Saving notes:", updatedNotes);
  };

  const editNote = (index: number) => {
    setCurrentNote({ index, content: notes()[index].content });
    setEditorVisible(true);
  };

  const renderNotes = async (notesList: Note[]) => {
    const highlighter = await getHighlighter({
      themes: ['vitesse-light', 'vitesse-dark'],
      langs: ['javascript', 'typescript', 'markdown', 'json', 'html', 'css']
    });

    const renderedNotes = await Promise.all(notesList.map(async note => {
      const codeToHtml = (code: string, lang: string) => {
        return highlighter.codeToHtml(code, { lang, theme: 'vitesse-dark' });
      };
      md.set({ highlight: codeToHtml });
      return md.render(note.content);
    }));
    document.querySelector('.notes-list')!.innerHTML = renderedNotes.join("\n");
  };

  const sortNotes = (criteria: string) => {
    setSortBy(criteria);
    const sortedNotes = [...notes()].sort((a, b) => {
      if (criteria === "date") return new Date(b.date).getTime() - new Date(a.date).getTime();
      if (criteria === "name") return a.name.localeCompare(b.name);
      return 0;
    });
    setNotes(sortedNotes);
    renderNotes(sortedNotes);
  };

  onMount(() => {
    loadNotes();
  });

  return (
    <div>
      <div class="actions">
        <button class="fa-add" onClick={() => setEditorVisible(true)}>+</button>
        <button class="fa-sort-date" onClick={() => sortNotes("date")}>Sort by Date</button>
        <button class="fa-sort-name" onClick={() => sortNotes("name")}>Sort by Name</button>
      </div>
      {editorVisible() && (
        <div class="modal">
          <textarea
            value={currentNote().content}
            onInput={(e) => setCurrentNote({ ...currentNote(), content: e.currentTarget.value })}
            rows={10}
            cols={50}
            placeholder="Write your note here..."
          ></textarea>
          <button class="fa-save" onClick={saveNote}>Save</button>
        </div>
      )}
      <div class="notes-list"></div>
      <style>
        {`
          .actions {
            margin-bottom: 20px;
          }
          .modal {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: white;
            padding: 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
          }
          .notes-list {
            margin-top: 20px;
          }
          .note {
            background: #f9f9f9;
            padding: 10px;
            border-radius: 4px;
            margin-bottom: 10px;
          }
        `}
      </style>
    </div>
    // <p>
    //   fine
    // </p>
  );
};

export default ProjectsModal;
