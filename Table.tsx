export function Table({ tables }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>age</th>
            <th>loacation</th>
            <th>username</th>
          </tr>
        </thead>
        <tbody>
          {tables &&
            tables.map((res) => {
              return (
                <tr key={Math.random()}>
                  <td>{res.name}</td>
                  <td>{res.age}</td>
                  <td>{res.location}</td>
                  <td>{res.username}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
