import { useNavigate, useParams } from "react-router-dom";

export const Display_Mezmur = () => {
    const params = useParams()
    const navigate = useNavigate()
  
    const onBackClick = e => {
      e.preventDefault()
      // navigate(-1);
      navigate('/mezmur/editmezmur')
    }
  
    return (
      <>
        <h2>Detail list of Mezmur </h2>
        <a href="#" onClick={onBackClick}>
          Back to Edit
        </a>
      </>
    )
  }