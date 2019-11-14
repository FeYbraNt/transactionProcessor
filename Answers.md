# Answers to questions

## Your tasks

#### Do you miss any class? 

Not at all, it might be better to create a Decimal type class for money amounts (this would get more precise results) but for this case I think we can keep it simple and just use **toFixed** function.

#### Would you include more tests?

It depends on the coverage you want to have but I think the ones already given are focused on basic functionalities and that should be good to begin with.

#### Do you know the pattern used by TransactionProcessor class?

Yes, it's an **API pattern**. It allows to create a fluent interface with **method chaining** which increases code legibility and implements **method cascading** concretely by having each method return **this** (self). 