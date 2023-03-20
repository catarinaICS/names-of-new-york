import React from 'react';
import { render, screen } from '@testing-library/react';
import { SelectedNameCard } from '..';

const name = "Jane";
const actionFn = jest.fn();

describe('when the card action props are not passed', () => {
    beforeEach(() => render(<SelectedNameCard name={name} />));

    it('should render the passed name', () => {
        expect(screen.getByText(name)).toBeTruthy()
    });

    it('should not render the card action button', () => {
        expect(screen.queryByRole("button")).toBeNull()
    });
})

describe('when the card action props are passed', () => {
    describe('when only one of the action props is passed', () => {
        it('should not render the card action button', () => {
            render(<SelectedNameCard name={name} cardActionName="Clear"/>)
            expect(screen.queryByRole("button")).toBeNull()
        });
    })

    describe('when all action props are passed', () => {
        it('renders the card action button', () => {
            render(<SelectedNameCard name={name} cardActionName="Clear" cardAction={actionFn}/>)
            expect(screen.getByRole("button")).toBeTruthy()
            expect(screen.getByText("Clear")).toBeTruthy()
        });
    })
})