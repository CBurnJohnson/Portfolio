import {
    GET_MERN_PROJECTS,
    GET_REACT_PROJECTS,
    GET_JAVASCRIPT_PROJECTS,
    GET_CNET_PROJECTS,
    GET_PHP_PROJECTS
} from '../types';

export default (state, action) => {
    switch (action.type) {
        case GET_MERN_PROJECTS:
            return {
                ...state,
                currentProjects: state.mernProjects
            };
        case GET_REACT_PROJECTS:
            return {
                ...state,
                currentProjects: state.reactProjects
            };
        case GET_JAVASCRIPT_PROJECTS:
            return {
                ...state,
                currentProjects: state.javascriptProjects
            };
        case GET_CNET_PROJECTS:
            return {
                ...state,
                currentProjects: state.cNetProjects
            };
        case GET_PHP_PROJECTS:
            return {
                ...state,
                currentProjects: state.phpProjects
            };
        default:
            return state;
    }
};
