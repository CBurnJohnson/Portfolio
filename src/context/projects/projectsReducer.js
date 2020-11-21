import {
    GET_MERN_PROJECTS,
    GET_REACT_PROJECTS,
    GET_JAVASCRIPT_PROJECTS,
    GET_CNET_PROJECTS,
    GET_PHP_PROJECTS,
    GET_REACT_NATIVE_PROJECTS,
    CHANGE_ACTIVE_PROJECT
} from '../types';

export default (state, action) => {
    switch (action.type) {
        case GET_MERN_PROJECTS:
            return {
                ...state,
                currentProjects: state.mernProjects,
                currentNavProjects: 'mern'
            };
        case GET_REACT_PROJECTS:
            return {
                ...state,
                currentProjects: state.reactProjects,
                currentNavProjects: 'react'
            };
        case GET_REACT_NATIVE_PROJECTS:
            return {
                ...state,
                currentProjects: state.reactNativeProjects,
                currentNavProjects: 'reactnative'
            };
        case GET_JAVASCRIPT_PROJECTS:
            return {
                ...state,
                currentProjects: state.javascriptProjects,
                currentNavProjects: 'javascript'
            };
        case GET_CNET_PROJECTS:
            return {
                ...state,
                currentProjects: state.cNetProjects,
                currentNavProjects: 'c#net'
            };
        case GET_PHP_PROJECTS:
            return {
                ...state,
                currentProjects: state.phpProjects,
                currentNavProjects: 'php'
            };
        case CHANGE_ACTIVE_PROJECT:
            return {
                ...state,
                activeProject: action.payload
            };
        default:
            return state;
    }
};
