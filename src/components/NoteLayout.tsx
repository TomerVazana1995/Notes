import { Note } from '../shared/types'
import { Navigate, useParams, Outlet } from 'react-router-dom'

type Props = {
  notes: Note[];
}

const NoteLayout = ({notes}: Props) => {

  const {id} = useParams();
  const note = notes.find(n => n.id === id)

  if (note === null) return <Navigate to="/" replace/>

  return <Outlet context={note}/>
}

export default NoteLayout