import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import App from "../App";
import Admin from "../pages/Admin";
import GameStoreContainer from "../pages/GameStoreContainer";
import GameStoreList from "../pages/GameStoreList";
import GameStoreCard from "../pages/GameStoreCard";
import GameCard from "../pages/GameCard";
import { BrowserRouter } from "react-router-dom";


describe("App component", () => {
    test("renders without crashing", () => {
        render(
            <App />
        );
        const homeElements = screen.getAllByText("Home");
        expect(homeElements[1]).toBeInTheDocument(); // Target the correct "Home" element
    });
    test("navigates to Admin page", () => {
        render(
            <App />
        );
        fireEvent.click(screen.getByText("Admin"));
        expect(screen.getByTestId("Admin-heading")).toBeInTheDocument();
    });
    test("navigates to Game Stores page", () => {
        render(
            <App />
        );
        fireEvent.click(screen.getByText("Game Stores"));
        expect(screen.getByTestId("game-stores-heading")).toBeInTheDocument();
    });
});

describe("Admin component", () => {
    test("renders without crashing", () => {
        render(
            <BrowserRouter>
                <Admin stores={[]} setStores={vi.fn()} />
            </BrowserRouter>
        );
        expect(screen.getByTestId("Admin-heading")).toBeInTheDocument();
    });
    test("adds a new store", () => {
        const setStores = vi.fn();
        render(
            <BrowserRouter>
                <Admin stores={[]} setStores={setStores} />
            </BrowserRouter>
        );
        const locationInput = screen.getByPlaceholderText("Store Location");
        const descriptionInput = screen.getByPlaceholderText("Store Description");
        const phoneNumberInput = screen.getByPlaceholderText("Store Phone Number");

        fireEvent.input(locationInput, { target: { value: "Test Location" } });
        console.log("Location input changed to: Test Location");
        fireEvent.input(descriptionInput, { target: { value: "Test Description" } });
        console.log("Description input changed to: Test Description");
        fireEvent.input(phoneNumberInput, { target: { value: "123-4567" } });
        console.log("Phone Number input changed to: 123-4567");

        fireEvent.click(screen.getByText("Add Store"));
        console.log("Add Store button clicked");
        expect(setStores).toHaveBeenCalled();
    });
});

describe("GameStoreContainer component", () => {
    test("renders without crashing", () => {
        render(
            <BrowserRouter>
                <GameStoreContainer stores={[]} setStores={vi.fn()} />
            </BrowserRouter>
        );
        expect(screen.getByTestId("game-stores-heading")).toBeInTheDocument();
    });
});