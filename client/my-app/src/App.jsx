import { gql, useQuery } from "@apollo/client";

const App = () => {
  const query = gql`
    query GetTodosWithUser {
      getTodos {
        id
        title
        completed
        user {
          id
          name
        }
      }
    }
  `;
  const { loading, data } = useQuery(query);

  if (loading) return <h1>Loading...</h1>;
  return (
    <div className="App">
      <table>
        <tbody>
          {data.getTodos.map((todo) => (
            <tr>
              <td>{todo.title}</td>
              <td>{todo?.user?.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
