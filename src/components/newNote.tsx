import NoteForm from "./NoteForm";
import { NoteData, Tag } from "../shared/types";

type Props = {
  onSubmite: (data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
};

const newNote = ({ onSubmite, onAddTag, availableTags }: Props) => {
  return (
    <>
      <h1 className="mb-4">New Notes</h1>
      <NoteForm
        onSubmit={onSubmite}
        onAddTag={onAddTag}
        availableTags={availableTags}
      />
    </>
  );
};

export default newNote;
