export const getUsers = async (params?: Record<string, string>) => {
  const res = await fetch(
    `http://localhost:8888/users?${params ? new URLSearchParams(params) : ''}`
  );

  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);

  const headers = res.headers;
  const data = await res.json();

  return { headers, data };
};
