import "./PaginationBar.css";
import { connect } from "react-redux";
import { selectPage } from "../../Actions/mainAction";
import { useEffect, useState } from "react";

export const PokemonsPerPage = 12;

function PaginationBar(props) { 

    useEffect(() => {
      setSelectedPageNumber(1);
      props.selectPage(1);
    }, [props.filteredPokemons])

    const [selectedPageNumber, setSelectedPageNumber] = useState(1);
    const numOfPagesOnBar = 3;
    let totalNumberOfPages = 0;

    const handleClick = (newPageNumber) => {
        setSelectedPageNumber(newPageNumber);
        props.selectPage(newPageNumber);
    }

    const renderPageNumeration = () => {
        let numeration = []
        props.filteredPokemons.forEach((_p,i)=> {
            let pageNumber = (i/PokemonsPerPage)+1;
            if((i)%PokemonsPerPage===0)
                numeration.push(<button key={i} className={pageNumber===selectedPageNumber ? 'pagination-numbers active' : 'pagination-numbers' } onClick={()=>handleClick(pageNumber)}>{pageNumber}</button>);
        })
        totalNumberOfPages = numeration.length;
        if(totalNumberOfPages === 1)
          return [];
        if(selectedPageNumber > totalNumberOfPages - numOfPagesOnBar/2){
            return numeration.splice(-numOfPagesOnBar);
        }
        if(selectedPageNumber > numOfPagesOnBar-1){
            return numeration.slice(selectedPageNumber-(numOfPagesOnBar-1), selectedPageNumber+(numOfPagesOnBar-2));
        }        
        return numeration.slice(0,numOfPagesOnBar);
    }

    const renderPrevButton = () => {
        let result = [];
        if(selectedPageNumber > 1)
         result.push(<button className="pagination-buttons" onClick={()=>handleClick(selectedPageNumber-1)}>Prev</button>);       
        if(selectedPageNumber>(numOfPagesOnBar/2 + 1))
            result.push(<span className="pagination-buttons">...</span>);
        return result;
    }

    const renderNextButton = () => {
        let result = [];
        if(selectedPageNumber<(totalNumberOfPages - numOfPagesOnBar/2))
            result.push(<span className="pagination-buttons">...</span>);
        if(selectedPageNumber < totalNumberOfPages)
            result.push(<button className="pagination-buttons" onClick={()=>handleClick(selectedPageNumber+1)}>Next</button>);       
        return result;
    }

  return (
    <div>
      <div className="pagination-bar">
        {renderPrevButton()}
        {renderPageNumeration()}
        {renderNextButton()}
      </div>
    </div>
  );
}
const mapDispatchToProps = {
    selectPage
  }

function mapStateToProps(state) {
    return {
        filteredPokemons: state.filteredPokemons,
    };
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(PaginationBar);