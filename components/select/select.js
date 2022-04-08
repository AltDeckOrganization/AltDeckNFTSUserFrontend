
function select() {
    return (
        <div>    
            <div className='my-2 text-sm text-gray-500 uppercase'>Background</div>
            <div className="mb-3 select ">
                <select className="form-select form-select-sm  block w-full px-2 py-3 text-sm font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none " aria-label=".form-select-sm example">
                <option selected>Background</option>
                <option value="1">Base</option>
                <option value="2">Blue</option>
                <option value="3"></option>
                </select>
            </div>
        </div>
    )
}

export default select
