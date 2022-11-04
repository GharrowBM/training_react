import { useParams } from "react-router-dom"
import DogForm from "../../components/DogForm"
import { useSelector } from 'react-redux'

function DogDetail () {
  const { dogId } = useParams()
  const dogs = useSelector(state => state.dogState.dogs)
  const dogSelected = dogs.find(d => d.id === dogId)

  return <>
  <DogForm dog={dogSelected} mode='details' />
  </>
}

export default DogDetail