//src/components/PageNav.js

import React from 'react'
import PageLink from '../containers/PageLink'
import { Pages } from '../actions'

const PageNav = () => (
  <div className="navHolder">
    <PageLink page={Pages.SETUP}>
      Setup
    </PageLink>
    <PageLink page={Pages.GET_OUT_THE_DOOR}>
      Get Out the Door
    </PageLink>
    <PageLink page={Pages.PAUSE}>
      Pause
    </PageLink>
  </div>
)

export default PageNav
