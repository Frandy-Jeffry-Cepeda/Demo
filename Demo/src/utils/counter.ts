let currentId = 0; // Inicializamos el ID en 0

export function generateId(): number {
  currentId += 1; 
  return currentId;
}