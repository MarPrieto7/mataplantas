import React, {useState, useEffect}  from 'react'

  const SearchItems = () => {
    //setaear los hooks useState
    const [items, setItems] = useState([])
    const [search, setSearch] = useState("")
    
    //function para traer los datos de la API
    const URL = './products.json'
    const showData = async () => {
      const response = await fetch(URL)
      const data = await response.json()
      console.log(data)
      return data
    }
    showData()
  return (
    <><div>SearchItems</div><div>{showData}</div></>
  )
}

export default SearchItems