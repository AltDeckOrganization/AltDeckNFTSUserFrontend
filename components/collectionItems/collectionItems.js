
function collectionItems(props) {
    return (
        <div className="border-2 m-3 border rounded-xl py-7 border-gray-400">
            <div className="text-center">
                <div className="text-3xl font-bold">
                    {props.number}
                </div>
                <div className="text-gray-400 text-lg">
                    {props.title}
                </div>

            </div>
            
        </div>
    )
}

export default collectionItems
