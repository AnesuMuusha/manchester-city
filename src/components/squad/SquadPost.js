
const SquadPost=({name,bio,image})=>{

    return (

        <div>
        <div>{name}</div>
        <div>{bio}</div>
        <img src={image} alt={""} />
        </div>
    )
}
    export default SquadPost;