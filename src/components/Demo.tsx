import ReactPaginate from 'react-paginate';
import useUsers from '../hooks/useUsers';

function Demo() {
  const { users, initLoaded, loading, setOffset, limit, pageCount } = useUsers();

  const onPageChange = (data: { selected: number }) => {
    const selected = data.selected;

    setOffset(Math.ceil(selected * limit));
  };

  return (
    <div>
      {initLoaded && loading ? <div>Loading...</div> : <div>Done.</div>}

      <div
        className={['ListView', ...(initLoaded && loading ? ['ListView--layered'] : [])].join(' ')}
      >
        {!initLoaded && <div>Loading users...</div>}

        {users && (
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                {user.id} {user.name}
              </li>
            ))}
          </ul>
        )}
      </div>

      <ReactPaginate
        pageCount={pageCount}
        onPageChange={onPageChange}
        pageClassName="ReactPaginate__page"
        breakClassName="ReactPaginate__page"
        previousClassName="ReactPaginate__page"
        nextClassName="ReactPaginate__page"
        pageLinkClassName="ReactPaginate__link"
        activeLinkClassName="ReactPaginate__link ReactPaginate__link--active"
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
      />
    </div>
  );
}

export default Demo;
