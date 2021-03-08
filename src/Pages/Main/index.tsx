import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { toast } from 'react-toastify';
import Card from '../../Components/Card';
import IconTextInput from '../../Components/IconTextInput';
import PrimarySelect from '../../Components/PrimarySelect';
import {
  EN_DESCRIPTION,
  EN_ERROR,
  EN_TEXT,
  EN_TITLE,
} from '../../Constants/english';
import {
  PT_DESCRIPTION,
  PT_ERROR,
  PT_TEXT,
  PT_TITLE,
} from '../../Constants/portuguese';
import {
  ES_DESCRIPTION,
  ES_ERROR,
  ES_TEXT,
  ES_TITLE,
} from '../../Constants/spanish';

// import IconTextInput from '../../Components/IconTextInput';

import { Container, Description, Form, Title } from './styles';

const Main: React.FC = () => {
  const [text, setText] = useState('');
  const [wordsArray, setWordsArray] = useState<string[]>([]);
  const [trueWords, setTrueWords] = useState<string[]>([]);
  const [language, setLanguage] = useState<string>('pt-BR');
  const [page, setPage] = useState<number>(0);
  const [opened, setOpened] = useState<boolean>(true);

  useEffect(() => {
    if (opened) {
      setTrueWords([]);
    }
  }, [opened]);

  const handleError = (): string => {
    switch (language) {
      case 'en':
        return EN_ERROR;

      case 'pt-BR':
        return PT_ERROR;
      case 'es':
        return ES_ERROR;
      default:
        return 'error';
    }
  };

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

  const dictionarySearch = async (word: string): Promise<any> => {
    let response;
    await axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/${language}/${word}`)
      .then(({ data }: any) => {
        response = { ...data };
      })
      .catch(() => {
        response = false;
      });
    return response;
  };

  const handleSubmit = (): void => {
    setTrueWords([]);
    setOpened(true);
    setPage(0);
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
            console.log(status);
            return status;
          }
          return null;
        }),
      ).then((values) => {
        let array: any[] = [];
        Promise.all(
          values.map((value) => {
            if (value) {
              if (Object.keys(value).length > 1) {
                // for (let i = 0; i < value.length; i++) {
                //   array.push(value[i]);
                // }
                array = [...array, ...Object.values(value)];
              } else {
                array.push(value[0]);
              }
            }
          }),
        ).then(() => {
          if (array.length === 0) {
            toast.error(handleError());
          }
          setTrueWords([...array]);
        });
      });

      setWordsArray([]);
    }
  };

  const handlePage = (
    e: React.MouseEvent<HTMLButtonElement>,
    action: string,
  ): void => {
    if (action === 'next') {
      if (page >= trueWords.length - 1) {
        setPage(0);
      } else {
        setPage(page + 1);
      }
    } else if (page > 0) {
      setPage(page - 1);
    }
  };
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const { value } = e.target;
    setLanguage(value);
  };

  const handleDescription = (): string => {
    switch (language) {
      case 'en':
        return EN_DESCRIPTION;

      case 'pt-BR':
        return PT_DESCRIPTION;
      case 'es':
        return ES_DESCRIPTION;
      default:
        return 'error';
    }
  };

  const handleTitle = (): string => {
    switch (language) {
      case 'en':
        return EN_TITLE;

      case 'pt-BR':
        return PT_TITLE;
      case 'es':
        return ES_TITLE;
      default:
        return 'error';
    }
  };

  const handleCardText = (): string => {
    switch (language) {
      case 'en':
        return EN_TEXT;

      case 'pt-BR':
        return PT_TEXT;
      case 'es':
        return ES_TEXT;
      default:
        return 'error';
    }
  };
  return (
    <Container>
      <Form>
        <Title>{handleTitle()}</Title>
        <Description>{handleDescription()}</Description>

        <PrimarySelect
          values={[
            {
              name: 'English',
              value: 'en',
            },
            {
              name: 'Português',
              value: 'pt-BR',
            },
            {
              name: 'Español',
              value: 'es',
            },
          ]}
          defaultValue={language}
          onChange={(e) => handleSelect(e)}
        />

        <IconTextInput
          icon={BsSearch}
          clickHandler={handleSubmit}
          name="search"
          placeholder="----------"
          maxLength={5}
          onChange={(e) => setText(e.target.value)}
        />
        {trueWords.length > 0 && opened && (
          <Card
            pageFunction={handlePage}
            title={handleCardText()}
            page={page}
            dataText={trueWords[page]}
            closeFunction={setOpened}
          />
        )}
      </Form>
    </Container>
  );
};

export default Main;
