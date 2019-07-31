import React from 'react';
import {getStarWarsCharacters} from '../redux/reducers/starWarsReducer';
import {connect} from 'react-redux';
import { tsThisType } from '@babel/types';

class CharacterList extends React.Component {
    componentDidMount() {
        this.props.getStarWarsCharacters();
    }
    
    render() {
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-evenly"
                }}
            >
                <aside>
                    <h1>Breaking Bad Characters</h1>
                    <div>
                        {/* Breaking Bad Characters Here */}
                    </div>
                </aside>
                <aside>
                    <h1>Star Wars Characters</h1>
                    <div>
                        {/* Star Wars Characters Here */}
                        {this.props.loading === true ? 
                        <h1>Loading...</h1>
                        : null}
                        {this.props.characters.map(val => {
                            return <h1>{val.name}</h1>
                        })}
                    </div>
                </aside>
            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    return {
        characters: reduxState.starWarsReducer.characters,
        loading: reduxState.starWarsReducer.loading
    }
}

export default connect(mapStateToProps, { getStarWarsCharacters })(CharacterList);