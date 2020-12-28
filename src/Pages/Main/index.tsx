import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import IconTextInput from '../../Components/IconTextInput';
// import IconTextInput from '../../Components/IconTextInput';

import { Container, Description, Form, Title } from './styles';

const Main: React.FC = () => {
  const [text, setText] = useState('');
  const [wordsArray, setWordsArray] = useState<string[]>([]);
  const [trueWords, setTrueWords] = useState<string[]>([]);

  const getFactorial = (amount: number): number => {
    let value = 0;
    while (amount !== 0) {
      if (value === 0) {
        value = amount;
      } else {
        value *= amount;
      }
      amount--;
    }

    return value;
  };

  function changePlace(
    indexArray: number[],
    first: number,
    second: number,
  ): number[] {
    const aux = indexArray[first];
    indexArray[first] = indexArray[second];
    indexArray[second] = aux;
    return indexArray;
  }

  const recursivePermutation = (
    indexArray: number[],
    k: number,
    letters: string[],
  ): boolean => {
    const len = indexArray.length;
    if (k === len) {
      let counter = 0;
      let word = '';

      while (counter !== len) {
        word += letters[indexArray[counter]];
        counter++;
      }
      wordsArray.push(word);
    } else {
      for (let i = k; i < len; i++) {
        indexArray = changePlace(indexArray, k, i);
        recursivePermutation(indexArray, k + 1, letters);
        indexArray = changePlace(indexArray, i, k);
      }
    }
    return true;
  };

  const getWords = (letters: string[]): boolean => {
    const countArray: number[] = [];

    letters.map((value, index) => {
      countArray.push(index);

      return true;
    });

    const finished = recursivePermutation(countArray, 0, letters);

    return finished;
  };

  const dictionarySearch = async (word: string): Promise<boolean> => {
    let success = false;
    await axios
      .get(`https://api.dicionario-aberto.net/word/${word}`)
      .then(({ data }: any) => {
        if (data[0]) {
          success = true;
        } else {
          success = false;
        }
      })
      .catch((error: any) => {
        console.log(error);
      });
    return success;
  };

  const handleSubmit = (): void => {
    // setTrueWords([]);
    const letters = text.split('');
    const amount = letters.length;

    // Returns how many combinations are possible
    const factorial = getFactorial(amount);

    // Returns an array of possible words
    const finished = getWords(letters);

    if (finished) {
      Promise.all(
        wordsArray.map(async (word) => {
          const status = await dictionarySearch(word);
          if (status) {
            return word;
          }
          return null;
        }),
      ).then((values) => {
        const array: string[] = [];
        Promise.all(
          values.map((value) => {
            if (value) {
              array.push(value);
            }
          }),
        ).then(() => {
          setTrueWords([...array]);
        });
      });

      setWordsArray([]);
    }
  };

  return (
    <Container>
      <Form>
        <Title>Desembaralhador de Letras</Title>
        <Description>
          Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.
          Donec rutrum congue leo eget malesuada. Sed porttitor lectus nibh.
          Nulla quis lorem ut libero malesuada feugiat.
        </Description>

        <IconTextInput
          icon={BsSearch}
          clickHandler={handleSubmit}
          name="search"
          placeholder="----------"
          maxLength={10}
          onChange={(e) => setText(e.target.value)}
        />
        {trueWords.length > 0 && (
          <>
            {trueWords.map((word) => (
              <span key={word}>{word}</span>
            ))}
          </>
        )}
      </Form>
    </Container>
  );
};

export default Main;
