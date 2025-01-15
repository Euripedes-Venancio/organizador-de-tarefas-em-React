import {useState} from 'react';

const Todoforms = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !category) return;
    /////////////////
    //apos adcionar os valores, as informações serão apagadas do input e do option
    addTodo(value, category);
    setValue("");
    setCategory("");
    };

  return <div className= 'todo_form'>
    <h2>Criar Tarefas:</h2>
    <form onSubmit={handleSubmit}>
        <input 
         type="text" 
         placeholder="Digite o nome da Tarefa"
         value={value}
          onChange={(e) => setValue(e.target.value) }/>
        <select value={category} onChange={(e) => setCategory(e.target.value) }>
           <option  value="">Selecione uma categoria</option>
           <option  value="Trabalho">Trabalho</option>
           <option  value="Pessoal">Pessoal</option>
           <option  value="Estudos">Estudos</option>
        </select>
        <button type ='submit'>Criar Tarefa</button>
    </form>
    </div>
};

export default Todoforms
