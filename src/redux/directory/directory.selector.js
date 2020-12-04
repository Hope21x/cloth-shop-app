import {createSelector} from 'reselect';
import directory from '../../components/directory/directory';

const selectState = state => state.directory;

export const selectSections = createSelector(
    [selectState],
    directory => directory.sections
);