


export const Todolist=({data})=>{
    return (
        <div key={data.id}>
                    <p>{data.todo}</p>
                </div>
    )
}