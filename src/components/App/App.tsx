import './App.css'

function App() {
  const handleSubmit = (formData: FormData) => {
    console.log(formData.get('username'));
  };

  return (
	  <form action={handleSubmit}>
      <input type="text" name="username" defaultValue="John Doe"/>
      <button type="submit">Submit</button>
    </form>
  )
}

export default App
