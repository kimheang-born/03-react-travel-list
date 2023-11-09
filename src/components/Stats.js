export default function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding some items to your package list 🏕️</em>
      </p>
    );
  }

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  const itemText = numItems > 1 ? 'items' : 'item';

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? 'You got everthing! Ready to go 🌇'
          : `🎪 You have ${numItems} ${itemText} on your list,
          and you already packed ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
