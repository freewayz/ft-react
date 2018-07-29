import React from 'react'
import {Route, Switch} from 'react-router-dom'
import QuestionContainer from './list/QuestionsContainer'
import QuestionEditContainer from './create/QuestionEditContainer'
import QuestionCreateContainer from './create/QuestionCreateContainer'

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={QuestionContainer} />
      <Route exact path='/create' component={QuestionCreateContainer} />
      <Route exact path='/edit/:id' component={QuestionEditContainer} />
    </Switch>
  )
}

export default Routes
