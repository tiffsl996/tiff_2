---
layout: post
toc: True
title: ML, Titanic Data
description: Exploring the Titanic dataset with machine learning.
courses: {'csp': {'week': 25}}
type: ccc
---

## Introduction to Pandas and ML
> Here is how Mort started on this assignment by asking ChatGPT  ... Regarding Python Pandas, what are some data sets that would be good for learning Pandas?

- There are many data sets that are suitable for learning pandas, depending on your interests and the skills you want to develop. 

    Here are some suggestions...

    - Titanic Dataset: This is a classic dataset for data analysis and machine learning, and is often used as an introduction to pandas. The dataset contains information about passengers on the Titanic, including their demographics, ticket class, and survival status.

    - Iris Dataset: This is another classic dataset that is often used in machine learning and data analysis courses. The dataset contains information about iris flowers, including their sepal length, sepal width, petal length, and petal width.

    - NBA Player Stats: This dataset contains information about NBA players, including their stats for various games, their positions, and their salaries. It is a great dataset for learning how to clean and manipulate data using pandas.

    - Housing Prices Dataset: This dataset contains information about housing prices in a particular city or region, including variables such as the number of bedrooms, square footage, and price. It is a great dataset for learning how to manipulate and analyze numerical data using pandas.

    - COVID-19 Dataset: This dataset contains information about the COVID-19 pandemic, including the number of cases, deaths, and recoveries in various countries and regions. It is a great dataset for learning how to manipulate and analyze time-series data using pandas.

    - World Bank Dataset: This dataset contains information about economic indicators from various countries, such as GDP, population, and poverty rates. It is a great dataset for learning how to manipulate and analyze large datasets using pandas.


- These are just a few examples of the many datasets that are suitable for learning pandas. The best dataset for you will depend on your interests and the specific skills you want to develop.


> Follow up question, "where can I find Titanic data set?"

- The Titanic dataset is a popular dataset for data analysis and machine learning, and it can be found on various websites and data repositories. Here are a few places where you can find the Titanic dataset...

    - Kaggle: The Titanic dataset is available on Kaggle, which is a popular platform for data scientists and machine learning enthusiasts. You can download the dataset from the Kaggle website after creating an account.

    - UCI Machine Learning Repository: The Titanic dataset is also available on the UCI Machine Learning Repository, which is a collection of datasets that are commonly used for machine learning research. You can download the dataset from the UCI Machine Learning Repository website.

    - Seaborn library: If you have the Seaborn library installed in your Python environment, you can load the Titanic dataset directly from the library using the following code:


### Titanic Libraries
Using the Titanic dataset will require importing data.

```python
    import seaborn as sns
    titanic_data = sns.load_dataset('titanic')
```


```python
# Uncomment the following lines to install the required packages
# !pip install seaborn
# !pip install pandas
# !pip install scikit-learn
```

### Titanic Data
> Look at a sample of data.


```python
import seaborn as sns

# Load the titanic dataset
titanic_data = sns.load_dataset('titanic')

print("Titanic Data")


print(titanic_data.columns) # titanic data set
display(titanic_data[['survived','pclass', 'sex', 'age', 'sibsp', 'parch', 'class', 'fare', 'embark_town', 'alone']]) # look at selected columns
```

    Titanic Data
    Index(['survived', 'pclass', 'sex', 'age', 'sibsp', 'parch', 'fare',
           'embarked', 'class', 'who', 'adult_male', 'deck', 'embark_town',
           'alive', 'alone'],
          dtype='object')



<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>survived</th>
      <th>pclass</th>
      <th>sex</th>
      <th>age</th>
      <th>sibsp</th>
      <th>parch</th>
      <th>class</th>
      <th>fare</th>
      <th>embark_town</th>
      <th>alone</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>0</td>
      <td>3</td>
      <td>male</td>
      <td>22.0</td>
      <td>1</td>
      <td>0</td>
      <td>Third</td>
      <td>7.2500</td>
      <td>Southampton</td>
      <td>False</td>
    </tr>
    <tr>
      <th>1</th>
      <td>1</td>
      <td>1</td>
      <td>female</td>
      <td>38.0</td>
      <td>1</td>
      <td>0</td>
      <td>First</td>
      <td>71.2833</td>
      <td>Cherbourg</td>
      <td>False</td>
    </tr>
    <tr>
      <th>2</th>
      <td>1</td>
      <td>3</td>
      <td>female</td>
      <td>26.0</td>
      <td>0</td>
      <td>0</td>
      <td>Third</td>
      <td>7.9250</td>
      <td>Southampton</td>
      <td>True</td>
    </tr>
    <tr>
      <th>3</th>
      <td>1</td>
      <td>1</td>
      <td>female</td>
      <td>35.0</td>
      <td>1</td>
      <td>0</td>
      <td>First</td>
      <td>53.1000</td>
      <td>Southampton</td>
      <td>False</td>
    </tr>
    <tr>
      <th>4</th>
      <td>0</td>
      <td>3</td>
      <td>male</td>
      <td>35.0</td>
      <td>0</td>
      <td>0</td>
      <td>Third</td>
      <td>8.0500</td>
      <td>Southampton</td>
      <td>True</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>886</th>
      <td>0</td>
      <td>2</td>
      <td>male</td>
      <td>27.0</td>
      <td>0</td>
      <td>0</td>
      <td>Second</td>
      <td>13.0000</td>
      <td>Southampton</td>
      <td>True</td>
    </tr>
    <tr>
      <th>887</th>
      <td>1</td>
      <td>1</td>
      <td>female</td>
      <td>19.0</td>
      <td>0</td>
      <td>0</td>
      <td>First</td>
      <td>30.0000</td>
      <td>Southampton</td>
      <td>True</td>
    </tr>
    <tr>
      <th>888</th>
      <td>0</td>
      <td>3</td>
      <td>female</td>
      <td>NaN</td>
      <td>1</td>
      <td>2</td>
      <td>Third</td>
      <td>23.4500</td>
      <td>Southampton</td>
      <td>False</td>
    </tr>
    <tr>
      <th>889</th>
      <td>1</td>
      <td>1</td>
      <td>male</td>
      <td>26.0</td>
      <td>0</td>
      <td>0</td>
      <td>First</td>
      <td>30.0000</td>
      <td>Cherbourg</td>
      <td>True</td>
    </tr>
    <tr>
      <th>890</th>
      <td>0</td>
      <td>3</td>
      <td>male</td>
      <td>32.0</td>
      <td>0</td>
      <td>0</td>
      <td>Third</td>
      <td>7.7500</td>
      <td>Queenstown</td>
      <td>True</td>
    </tr>
  </tbody>
</table>
<p>891 rows × 10 columns</p>
</div>


### Clean Titanic Data
This is called 'Cleaning' data.  

Most analysis, like Machine Learning require data to be in standardized format...
- All data needs to be numeric
- Some data is removed, as it is not useable in study
- Sex and alone is changed to binary 
- The embark data is split into multiple columns



```python
import pandas as pd
# Preprocess the data
from sklearn.preprocessing import OneHotEncoder

td = titanic_data
td.drop(['alive', 'who', 'adult_male', 'class', 'embark_town', 'deck'], axis=1, inplace=True)
td.dropna(inplace=True) # drop rows with at least one missing value, after dropping unuseful columns
td['sex'] = td['sex'].apply(lambda x: 1 if x == 'male' else 0)
td['alone'] = td['alone'].apply(lambda x: 1 if x == True else 0)

# Encode categorical variables
enc = OneHotEncoder(handle_unknown='ignore')
enc.fit(td[['embarked']])
onehot = enc.transform(td[['embarked']]).toarray()
cols = ['embarked_' + val for val in enc.categories_[0]]
td[cols] = pd.DataFrame(onehot)
td.drop(['embarked'], axis=1, inplace=True)
td.dropna(inplace=True) # drop rows with at least one missing value, after preparing the data

print(td.columns)
display(td)
```

    Index(['survived', 'pclass', 'sex', 'age', 'sibsp', 'parch', 'fare', 'alone',
           'embarked_C', 'embarked_Q', 'embarked_S'],
          dtype='object')



<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>survived</th>
      <th>pclass</th>
      <th>sex</th>
      <th>age</th>
      <th>sibsp</th>
      <th>parch</th>
      <th>fare</th>
      <th>alone</th>
      <th>embarked_C</th>
      <th>embarked_Q</th>
      <th>embarked_S</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>0</td>
      <td>3</td>
      <td>1</td>
      <td>22.0</td>
      <td>1</td>
      <td>0</td>
      <td>7.2500</td>
      <td>0</td>
      <td>0.0</td>
      <td>0.0</td>
      <td>1.0</td>
    </tr>
    <tr>
      <th>1</th>
      <td>1</td>
      <td>1</td>
      <td>0</td>
      <td>38.0</td>
      <td>1</td>
      <td>0</td>
      <td>71.2833</td>
      <td>0</td>
      <td>1.0</td>
      <td>0.0</td>
      <td>0.0</td>
    </tr>
    <tr>
      <th>2</th>
      <td>1</td>
      <td>3</td>
      <td>0</td>
      <td>26.0</td>
      <td>0</td>
      <td>0</td>
      <td>7.9250</td>
      <td>1</td>
      <td>0.0</td>
      <td>0.0</td>
      <td>1.0</td>
    </tr>
    <tr>
      <th>3</th>
      <td>1</td>
      <td>1</td>
      <td>0</td>
      <td>35.0</td>
      <td>1</td>
      <td>0</td>
      <td>53.1000</td>
      <td>0</td>
      <td>0.0</td>
      <td>0.0</td>
      <td>1.0</td>
    </tr>
    <tr>
      <th>4</th>
      <td>0</td>
      <td>3</td>
      <td>1</td>
      <td>35.0</td>
      <td>0</td>
      <td>0</td>
      <td>8.0500</td>
      <td>1</td>
      <td>0.0</td>
      <td>0.0</td>
      <td>1.0</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>705</th>
      <td>0</td>
      <td>2</td>
      <td>1</td>
      <td>39.0</td>
      <td>0</td>
      <td>0</td>
      <td>26.0000</td>
      <td>1</td>
      <td>0.0</td>
      <td>0.0</td>
      <td>1.0</td>
    </tr>
    <tr>
      <th>706</th>
      <td>1</td>
      <td>2</td>
      <td>0</td>
      <td>45.0</td>
      <td>0</td>
      <td>0</td>
      <td>13.5000</td>
      <td>1</td>
      <td>0.0</td>
      <td>0.0</td>
      <td>1.0</td>
    </tr>
    <tr>
      <th>707</th>
      <td>1</td>
      <td>1</td>
      <td>1</td>
      <td>42.0</td>
      <td>0</td>
      <td>0</td>
      <td>26.2875</td>
      <td>1</td>
      <td>0.0</td>
      <td>1.0</td>
      <td>0.0</td>
    </tr>
    <tr>
      <th>708</th>
      <td>1</td>
      <td>1</td>
      <td>0</td>
      <td>22.0</td>
      <td>0</td>
      <td>0</td>
      <td>151.5500</td>
      <td>1</td>
      <td>0.0</td>
      <td>0.0</td>
      <td>1.0</td>
    </tr>
    <tr>
      <th>710</th>
      <td>1</td>
      <td>1</td>
      <td>0</td>
      <td>24.0</td>
      <td>0</td>
      <td>0</td>
      <td>49.5042</td>
      <td>1</td>
      <td>1.0</td>
      <td>0.0</td>
      <td>0.0</td>
    </tr>
  </tbody>
</table>
<p>564 rows × 11 columns</p>
</div>


### Train Titanic Data
The result of 'Training' data is making it easier to analyze or make conclusions.

What conclusions can you make using min, max, means statistics bout the following...
- Given that 1-male and 0-femaale, what gender is more likely to suvive?
- Can you make an conclusions on fare?
- Can you make any conclusions on being alone?

#### Median Values


```python
print(titanic_data.median())
```

    survived       0.0
    pclass         2.0
    sex            1.0
    age           28.0
    sibsp          0.0
    parch          0.0
    fare          16.1
    alone          1.0
    embarked_C     0.0
    embarked_Q     0.0
    embarked_S     1.0
    dtype: float64


#### Perished Mean/Average


```python
print(titanic_data.query("survived == 0").mean())
```

    survived       0.000000
    pclass         2.464072
    sex            0.844311
    age           31.073353
    sibsp          0.562874
    parch          0.398204
    fare          24.835902
    alone          0.616766
    embarked_C     0.185629
    embarked_Q     0.038922
    embarked_S     0.775449
    dtype: float64


#### Survived Mean/Average


```python
print(td.query("survived == 1").mean())
```

    survived       1.000000
    pclass         1.878261
    sex            0.326087
    age           28.481522
    sibsp          0.504348
    parch          0.508696
    fare          50.188806
    alone          0.456522
    embarked_C     0.152174
    embarked_Q     0.034783
    embarked_S     0.813043
    dtype: float64


#### Survived Max and Min Stats


```python
print("maximums for survivors")
print(td.query("survived == 1").max())
print()
print("minimums for survivors")
print(td.query("survived == 1").min())
```

    maximums for survivors
    survived        1.0000
    pclass          3.0000
    sex             1.0000
    age            80.0000
    sibsp           4.0000
    parch           5.0000
    fare          512.3292
    alone           1.0000
    embarked_C      1.0000
    embarked_Q      1.0000
    embarked_S      1.0000
    dtype: float64
    
    minimums for survivors
    survived      1.00
    pclass        1.00
    sex           0.00
    age           0.75
    sibsp         0.00
    parch         0.00
    fare          0.00
    alone         0.00
    embarked_C    0.00
    embarked_Q    0.00
    embarked_S    0.00
    dtype: float64


## Machine Learning <a href="https://www.tutorialspoint.com/scikit_learn/scikit_learn_introduction.htm#:~:text=Scikit%2Dlearn%20(Sklearn)%20is,a%20consistence%20interface%20in%20Python">Visit Tutorials Point</a>
> Scikit-learn (SciPy Toolkit) is the most useful and robust library for machine learning in Python. It provides a selection of efficient tools for machine learning and statistical modeling including classification, regression, clustering and dimensionality reduction via a consistence interface in Python.

- Description from ChatGPT...  The Titanic dataset is a popular dataset for data analysis and machine learning. 

- In the context of machine learning, accuracy refers to the percentage of correctly classified instances in a set of predictions. In this case, the testing data is a subset of the original Titanic dataset that the decision tree model has not seen during training.
  - After training the decision tree model on the training data, we can evaluate its performance on the testing data by making predictions on the testing data and comparing them to the actual outcomes. The accuracy of the decision tree classifier on the testing data tells us how well the model generalizes to new data that it hasn't seen before.
  - For example, if the accuracy of the decision tree classifier on the testing data is 0.8 (or 80%), this means that 80% of the predictions made by the model on the testing data were correct.
  - Chance of survival could be done using various machine learning techniques, including decision trees, logistic regression, or support vector machines, among others.

- Code Below prepares data for further analysis and provides an Accuracy.  
    - [Decision Trees](https://scikit-learn.org/stable/modules/tree.html#tree), prediction by a piecewise constant approximation.
    
    - [Logistic Regression](https://scikit-learn.org/stable/modules/linear_model.html#logistic-regression), the probabilities describing the possible outcomes.


```python
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score

# Split arrays or matrices into random train and test subsets.
X = td.drop('survived', axis=1)
y = td['survived']
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# Train a decision tree classifier
dt = DecisionTreeClassifier()
dt.fit(X_train, y_train)

# Test the model
y_pred = dt.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)
print('DecisionTreeClassifier Accuracy: {:.2%}'.format(accuracy))  

# Train a logistic regression model
logreg = LogisticRegression()
logreg.fit(X_train, y_train)

# Test the model
y_pred = logreg.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)
print('LogisticRegression Accuracy: {:.2%}'.format(accuracy))  
```

    DecisionTreeClassifier Accuracy: 74.71%
    LogisticRegression Accuracy: 78.82%


    /opt/homebrew/lib/python3.11/site-packages/sklearn/linear_model/_logistic.py:469: ConvergenceWarning: lbfgs failed to converge (status=1):
    STOP: TOTAL NO. of ITERATIONS REACHED LIMIT.
    
    Increase the number of iterations (max_iter) or scale the data as shown in:
        https://scikit-learn.org/stable/modules/preprocessing.html
    Please also refer to the documentation for alternative solver options:
        https://scikit-learn.org/stable/modules/linear_model.html#logistic-regression
      n_iter_i = _check_optimize_result(


### Predicting Survival
The better prediction model appears to be logistic regression.  So, now we are ready to play the game... "Would I have survived the Titanic?".  

Insert your own data in the code.  Look at your analysis and consider how you would travel today.
- Data description:
    - pclass - Passenger Class (1 = 1st; 2 = 2nd; 3 = 3rd)
    - name - Name
    - sex - male or female
    - age - number of year 
    - sibsp - number of Siblings/Spouses Aboard
    - parch - number of Parents/Children Aboard
    - fare - passenger fare 0 to 512
    - embarked - Port of Embarkation (C = Cherbourg; Q = Queenstown; S = Southampton)
    - alone - boolean True or False


```python
import numpy as np

# Define a new passenger
passenger = pd.DataFrame({
    'name': ['John Mortensen'],
    'pclass': [2], # 2nd class picked as it was median, bargains are my preference, but I don't want to have poor accomodations
    'sex': ['male'],
    'age': [64],
    'sibsp': [1], # I usually travel with my wife
    'parch': [1], # currenly I have 1 child at home
    'fare': [16.00], # median fare picked assuming it is 2nd class
    'embarked': ['S'], # majority of passengers embarked in Southampton
    'alone': [False] # travelling with family (spouse and child))
})

display(passenger)
new_passenger = passenger.copy()

# Preprocess the new passenger data
new_passenger['sex'] = new_passenger['sex'].apply(lambda x: 1 if x == 'male' else 0)
new_passenger['alone'] = new_passenger['alone'].apply(lambda x: 1 if x == True else 0)

# Encode 'embarked' variable
onehot = enc.transform(new_passenger[['embarked']]).toarray()
cols = ['embarked_' + val for val in enc.categories_[0]]
new_passenger[cols] = pd.DataFrame(onehot, index=new_passenger.index)
new_passenger.drop(['name'], axis=1, inplace=True)
new_passenger.drop(['embarked'], axis=1, inplace=True)

display(new_passenger)

# Predict the survival probability for the new passenger
dead_proba, alive_proba = np.squeeze(logreg.predict_proba(new_passenger))

# Print the survival probability
print('Death probability: {:.2%}'.format(dead_proba))  
print('Survival probability: {:.2%}'.format(alive_proba))
```


<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>name</th>
      <th>pclass</th>
      <th>sex</th>
      <th>age</th>
      <th>sibsp</th>
      <th>parch</th>
      <th>fare</th>
      <th>embarked</th>
      <th>alone</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>John Mortensen</td>
      <td>2</td>
      <td>male</td>
      <td>64</td>
      <td>1</td>
      <td>1</td>
      <td>16.0</td>
      <td>S</td>
      <td>False</td>
    </tr>
  </tbody>
</table>
</div>



<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>pclass</th>
      <th>sex</th>
      <th>age</th>
      <th>sibsp</th>
      <th>parch</th>
      <th>fare</th>
      <th>alone</th>
      <th>embarked_C</th>
      <th>embarked_Q</th>
      <th>embarked_S</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>2</td>
      <td>1</td>
      <td>64</td>
      <td>1</td>
      <td>1</td>
      <td>16.0</td>
      <td>0</td>
      <td>0.0</td>
      <td>0.0</td>
      <td>1.0</td>
    </tr>
  </tbody>
</table>
</div>


    Death probability: 90.60%
    Survival probability: 9.40%

