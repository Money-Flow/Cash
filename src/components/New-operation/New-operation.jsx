import React from "react";

import { testIds } from "./testIds";

import newOperation from "./New-operation.css";

const replacesNonDigitsInInput = evt => {
  return (evt.target.value = evt.target.value.replace(/\D/g, ""));
};

const operations = [
  {
    id: 101,
    name: "Spend",
    value: "spend"
  },
  {
    id: 102,
    name: "Get",
    value: "get"
  },
  {
    id: 103,
    name: "Move",
    value: "move"
  },
  {
    id: 104,
    name: "Exchange",
    value: "exchange"
  }
];

const category = [
  {
    id: 501,
    name: "Bank Services",
    value: "bank-services"
  },
  {
    id: 502,
    name: "Car",
    value: "car"
  },
  {
    id: 503,
    name: "Clothing",
    value: "clothing"
  },
  {
    id: 504,
    name: "Education",
    value: "education"
  },
  {
    id: 505,
    name: "Events",
    value: "events"
  },
  {
    id: 506,
    name: "Food & Groceries",
    value: "food-and-groceries"
  },
  {
    id: 507,
    name: "Health",
    value: "health"
  },
  {
    id: 508,
    name: "Household",
    value: "household"
  },
  {
    id: 509,
    name: "Job expenses",
    value: "job-expenses"
  },
  {
    id: 510,
    name: "Transport",
    value: "transport"
  }
];

const account = [
  {
    id: 1001,
    name: "Cash",
    value: "cash"
  },
  {
    id: 1002,
    name: "Cards",
    value: "cards"
  },
  {
    id: 1003,
    name: "Bank accounts",
    value: "bank-accounts"
  }
];

const findById = (array, id) => array.find(x => x.id === Number(id));

export const NewOperation = ({
  amount,
  operationID = 101,
  categoryID = 501,
  accountID = 1001,
  textarea
}) => {
  const currentOperation = findById(operations, operationID),
    currentCategory = findById(category, categoryID),
    currentAccount = findById(account, accountID);
  return (
    <div>
      <div className="box">
        <div className={newOperation.name}>Amount</div>
        <input
          data-testid={testIds.amountInput}
          className={newOperation.input}
          type="number"
          onInput={evt => replacesNonDigitsInInput(evt)}
          defaultValue={amount}
        />
      </div>
      <div className="box">
        <div className={newOperation.name}>Operation</div>
        <select
          data-testid={testIds.selectOperation}
          defaultValue={currentOperation.value}
        >
          {operations.map(currentValue => (
            <option value={currentValue.value} key={currentValue.id}>
              {currentValue.name}
            </option>
          ))}
        </select>
      </div>
      <div className="box">
        <div className={newOperation.name}>Category</div>
        <select
          data-testid={testIds.selectCategory}
          defaultValue={currentCategory.value}
        >
          {category.map(currentValue => (
            <option value={currentValue.value} key={currentValue.id}>
              {currentValue.name}
            </option>
          ))}
        </select>
      </div>
      <div className="box">
        <div className={newOperation.name}>Account</div>
        <select
          data-testid={testIds.selectAccount}
          defaultValue={currentAccount.value}
        >
          {account.map(currentValue => (
            <option value={currentValue.value} key={currentValue.id}>
              {currentValue.name}
            </option>
          ))}
        </select>
      </div>
      <div className="box">
        <div className={newOperation.name}>Notes</div>
        <textarea
          cols="30"
          rows="10"
          data-testid={testIds.textarea}
          defaultValue={textarea}
        />
      </div>
      <button data-testid={testIds.button}>Add</button>
    </div>
  );
};
