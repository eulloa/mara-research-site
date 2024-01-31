export const Header = () => {
  return (
    <header className="p-24">
      <div className="flex">
        <ul className="flex-1 flex justify-between">
          <li>Bio</li>
          <li>News</li>
          <li>Events</li>
          <li>CV</li>
        </ul>
        <ul className="flex-1 flex justify-between">
          <li>LinkedIn</li>
          <li>Github</li>
          <li>Twitter</li>
          <li>Google Scholar</li>
        </ul>
      </div>
    </header>
  );
};
