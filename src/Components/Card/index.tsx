import React, { ReactElement } from 'react';

import {
  Container,
  Backdrop,
  Title,
  Text,
  ButtonRow,
  Button,
  Previous,
  Next,
  Holder,
  Close,
  Definitions,
  Word,
  Speech,
  WordContainer,
} from './styles';

interface CardProps {
  title: string;
  text?: string | null;
  dataText?: any;
  page?: number;
  pageFunction: (
    event: React.MouseEvent<HTMLButtonElement>,
    action: string,
  ) => void;
  closeFunction: (open: boolean) => void;
}

const defaultProps: Partial<CardProps> = {
  text: null,
  dataText: null,
  page: 1,
};

const Card = ({
  title,
  text,
  page,
  dataText,
  pageFunction,
  closeFunction,
}: CardProps): ReactElement => {
  const mapData = (): ReactElement => {
    const definitionsMap = (meaning: any): ReactElement => {
      return meaning.definitions.map((value: any) => (
        <>
          <Definitions>{value.definition}</Definitions>
        </>
      ));
    };

    return (
      <>
        <Word>
          {dataText.word} <span>{dataText?.phonetics[0]?.text}</span>
        </Word>
        {dataText.meanings.map((meaning: any) => (
          <>
            <Speech>
              {meaning.partOfSpeech !== 'undefined' && meaning.partOfSpeech}
            </Speech>

            {definitionsMap(meaning)}
          </>
        ))}
      </>
    );
  };

  return (
    <>
      <Backdrop />
      <Holder>
        <Container>
          <Button onClick={() => closeFunction(false)}>
            <Close />
          </Button>
          <Title>{title}</Title>
          {text && <Text>{text}</Text>}
          <WordContainer>{dataText && mapData()}</WordContainer>
          {dataText && (
            <ButtonRow>
              <Button
                name="prev"
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                  pageFunction(e, 'prev');
                }}
              >
                <Previous />
              </Button>
              {page}
              <Button
                name="next"
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                  pageFunction(e, 'next');
                }}
              >
                <Next />
              </Button>
            </ButtonRow>
          )}
        </Container>
      </Holder>
    </>
  );
};

Card.defaultProps = defaultProps;

export default Card;
