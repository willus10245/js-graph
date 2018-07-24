import Graph from './graph';

describe('the graph function', () => {
  const graph = Graph();

  const verticies = [
    'Seattle', 'Denver', 'Chicago',
    'San Diego', 'Detroit', 'Minneapolis',
    'Boston', 'Atlanta',
  ];
  graph.addVerticies(verticies);

  graph.addEdge('Chicago', 'Denver');
  graph.addEdge('Seattle', 'Denver');
  graph.addEdge('Chicago', 'Detroit');
  graph.addEdge('Chicago', 'Atlanta');
  graph.addEdge('Detroit', 'Minneapolis');
  graph.addEdge('Detroit', 'Boston');
  graph.addEdge('Boston', 'Atlanta');

  it('throws an error when you add an edge to a nonexisting vertex', () => {
    const errorCall = () => {
      graph.addEdge('Cincinnat', 'Boston');
    };

    expect(errorCall).toThrow();
  });

  it('executes BFS', () => {
    expect(graph.bfs('Seattle', 'Chicago'))
      .toEqual(['Seattle', 'Denver', 'Chicago']);
    expect(graph.bfs('Seattle', 'Boston'))
      .toEqual(['Seattle', 'Denver', 'Chicago', 'Detroit', 'Boston']);
    expect(graph.bfs('Chicago', 'Minneapolis'))
      .toEqual(['Chicago', 'Detroit', 'Minneapolis']);
    expect(graph.bfs('Atlanta', 'Denver'))
      .toEqual(['Atlanta', 'Chicago', 'Denver']);
  });

  it('executes DFS', () => {
    expect(graph.dfs('Chicago', 'Denver')).toEqual(['Chicago', 'Denver']);
    expect(graph.dfs('Seattle', 'Boston'))
      .toEqual(['Seattle', 'Denver', 'Chicago', 'Atlanta', 'Boston']);
  });
});
