import React from 'react';
import HasliCollection from './CollectionSections/HasliCollection';
import LokaCollection from './CollectionSections/LokaCollection';
import NakshatraCollection from './CollectionSections/NakshatraCollection';
import IryaCollection from './CollectionSections/IryaCollection';

function Collections() {
  return (
        <>
        <HasliCollection/>
        <LokaCollection/>
        <NakshatraCollection/>
        <IryaCollection/>
        </>
  );
}

export default Collections;
