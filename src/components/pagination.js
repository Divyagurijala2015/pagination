import React,{useState} from "react";
import data from "./data";
import ReactPaginate from "react-paginate";

function Task4(){
    const [user,setUser] = useState(data.slice(0,35))
    const [pageNumber,setPageNumber] = useState(0)

    const usersPerPage = 3;
    const pagesVisited = pageNumber*usersPerPage;
    const displayUsers = user
    .slice(pagesVisited,pagesVisited+usersPerPage)
    .map((item,key) =>{
        return(
            <div className="container" key={key}>
                <div className="col-md-8 row-md-2 mt-4">
                    <div className="card  mb-5">
                        <div className="card-header">
                            <p>{item.id}</p>
                        </div>
                        <div className="card-body">
                            <p>{item.title}</p>
                            <p>{item.body}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    const pageCount = Math.ceil(user.length/usersPerPage)
    const changePage = ({selected}) =>{
        setPageNumber(selected)
    }
    

    return(
        <div>
           {displayUsers}
           <ReactPaginate 
           previousLabel={"Prevoius"}
           nextLabel={"Next"}
           pageCount={pageCount}
           onPageChange={changePage}
           containerClassName={"paginationBttns"}
           previousLinkClassName={"previousBttn"}
           nextLinkClassName={"nextBttn"}
           disabledClassName={"paginationDisabled"}
           activeClassName={"paginationActive"}
           />
        </div>
    )
}
export default Task4