import NoteForm from "./NoteForm";
import { NoteData, Tag } from "../shared/types";
import { useNote } from "./NoteList";

type Props = {
  onSubmite: (id: string, data :NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
};

const EditNote = ({ onSubmite, onAddTag, availableTags }: Props) => {
  const note = useNote()
  return (
    <>
      <h1 className="mb-4">Edit Note</h1>
      <NoteForm
        title={note.title}
        markdown={note.markdown}
        tags={note.tags}
        onSubmit={data => onSubmite(note.id, data)}
        onAddTag={onAddTag}
        availableTags={availableTags}
      />
    </>
  );
};

export default EditNote;
