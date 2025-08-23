import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest"
import App from "../App";
import Admin from "../pages/Admin";
import GameStoreContainer from "../pages/GameStoreContainer";
import GameStoreList from "../pages/GameStoreList";
import GameStoreCard from "../pages/GameStoreCard";
import GameCard from "../pages/GameCard";
import { BrowserRouter } from "react-router-dom";

// describe("App component", () => {
//     test("renders without crashing", () => {
//         render(<App />);
//         expect(screen.getByText("Home")).toBeInTheDocument();
//     });
//     test("navigates to Admin page", () => {
//         render(<App />);
//         fireEvent.click(screen.getByText("Admin"));
//         expect(screen.getByText("Admin")).toBeInTheDocument();
//     });
//     test("navigates to Game Stores page", () => {
//         render(<App />);
//         fireEvent.click(screen.getByText("Game Stores"));
//         expect(screen.getByTestId("game-stores-heading")).toBeInTheDocument();
//     });
// });
describe("Admin component", () => {
    test("renders without crashing", () => {
        render(<Admin stores={[]} setStores={() => {}} />);
        expect(screen.getByText("Admin")).toBeInTheDocument();
    });
    test("adds a new store", () => {
        const setStores = vi.fn();
        render(<Admin stores={[]} setStores={setStores} />);
        fireEvent.change(screen.getByPlaceholderText("Location"), { target: { value: "Test Location" } });
        fireEvent.change(screen.getByPlaceholderText("Description"), { target: { value: "Test Description" } });
        fireEvent.change(screen.getByPlaceholderText("Phone Number"), { target: { value: "123-4567" } });
        fireEvent.click(screen.getByText("Add Store"));
        expect(setStores).toHaveBeenCalled();
    });
    test("adds a new game", () => {
        const setStores = vi.fn();
        render(<Admin stores={[]} setStores={setStores} />);
        fireEvent.change(screen.getByPlaceholderText("Game Name"), { target: { value: "Test Game" } });
        fireEvent.change(screen.getByPlaceholderText("Store Location"), { target: { value: "Test Location" } });
        fireEvent.change(screen.getByPlaceholderText("Description"), { target: { value: "Test Description" } });
        fireEvent.change(screen.getByPlaceholderText("Tags (comma separated)"), { target: { value: "Test,Game" } });
        fireEvent.change(screen.getByPlaceholderText("Price"), { target: { value: "9.99" } });
        fireEvent.click(screen.getByText("Add Game"));
        expect(setStores).toHaveBeenCalled();
    });
});
describe("GameStoreContainer component", () => {
    test("renders without crashing", () => {
        render(
            <GameStoreContainer stores={[]} setStores={vi.fn()} />
        );
        expect(screen.getByText("Game Stores")).toBeInTheDocument();
    });
});