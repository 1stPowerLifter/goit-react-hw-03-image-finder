import * as SC from "./Searchbar.styled"
import PropTypes from 'prop-types';

export const Searchbar = ({updateQuery}) => {

    const hendleSubmit = e => {
        e.preventDefault()
        const query = e.target.elements.query.value.trim()
        updateQuery(query)
    } 

    return (
        <>
            <SC.Searchbar>
                <SC.SearchForm onSubmit={e => hendleSubmit(e) }>
                    <button type="submit" className="button">
                        <span className="button-label">Search</span>
                    </button>

                    <input
                        name = "query"
                        className="input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </SC.SearchForm>
            </SC.Searchbar>
        </>
    );
};

Searchbar.propTypes = {
    updateQuery: PropTypes.func.isRequired
}