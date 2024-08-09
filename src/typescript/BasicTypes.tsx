export const BasicTypes = () => {
  const name: string = 'Rodrigo';
  const age: number = 21;
  const isActive: boolean = true;

  const powers: string[] = ['react', 'angular', 'vue'];
  return (
    <>
      <h3>Tipos basicos</h3>
      {name} {age}
      {isActive ? 'true' : 'false'}
      <br />
      {powers.join(', ')}
    </>
  );
};
