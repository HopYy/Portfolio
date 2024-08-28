const NoteCard = ({ note, golden = false }) => {
  return (
    <div className={`px-3 py-2 rounded-lg overflow-hidden ${golden ? "bg-yellow-400" : "bg-third-color"}`}>
        <span className={`text-sm font-semibold select-none ${golden ? "text-black" : "text-white"}`}>{note}</span>
    </div>
  )
}

export default NoteCard