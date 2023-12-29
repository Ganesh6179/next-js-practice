const fetchData = async () =>{
    const data =  await fetch('https://jsonplaceholder.typicode.com/posts')
    const result = data.json()
    return result
}

const Data = async () => {

    let products = await fetchData();
  return (
    <div>
        {
            products?.map((p)=>(
                <li key={p.id}>{p.title}</li>
            ))
        }
    </div>
  )
}

export default Data