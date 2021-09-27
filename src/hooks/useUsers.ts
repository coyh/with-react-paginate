import { useCallback, useEffect, useState } from 'react';
import { getUsers } from '../api';
import { User } from '../entity/user.entity';
import wait from '../util/wait';

export default function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [initLoaded, setInitLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [limit] = useState(10);
  const [pageCount, setPageCount] = useState(0);

  const loadUsers = useCallback(
    async (params?: Record<string, unknown>) => {
      setLoading(true);

      const response = await getUsers(params);

      await wait(2000);

      setUsers(response.data);
      setLoading(false);
      setInitLoaded(true);
      setPageCount(Math.ceil(response.headers['x-total-count'] / limit));
    },
    [limit]
  );

  useEffect(() => {
    loadUsers({
      _start: offset,
      _limit: limit,
    });
  }, [offset, limit, loadUsers]);

  return {
    users,
    initLoaded,
    loading,
    offset,
    setOffset,
    limit,
    pageCount,
  };
}
