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
} from './styles';

interface CardProps {
  title: string;
  text?: string | null;
  dataText?: any;
  pageFunction: (
    event: React.MouseEvent<HTMLButtonElement>,
    action: string,
  ) => void;
}

const defaultProps: Partial<CardProps> = {
  text: null,
  dataText: null,
};

const Card = ({
  title,
  text,
  dataText,
  pageFunction,
}: CardProps): ReactElement => {
  const mapData = (): ReactElement => {
    const definitionsMap = (meaning: any): ReactElement => {
      return meaning.definitions.map((value: any) => (
        <>
          <span>{value.definition}</span>
          <br />
        </>
      ));
    };

    return (
      <>
        <span>
          {dataText.word} {dataText?.phonetics[0]?.text}
        </span>
        {dataText.meanings.map((meaning: any) => (
          <>
            <br />

            <span>{meaning.partOfSpeech}</span>
            <br />
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
          <Button>
            <Close />
          </Button>
          <Title>{title}</Title>
          {text && <Text>{text}</Text>}
          {dataText && mapData()}
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
