/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
import { render } from "../../test-utils";
import Cita from "./Cita";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("QuoteComponent", () => {
    it("should render default quote", () => {
        render(<Cita />);
        expect(screen.getByText("No se encontro ninguna cita")).toBeInTheDocument();
    });

    it("should render loading when click the random button", async () => {
        render(<Cita />);
        await waitFor(() => {
            userEvent.click(screen.getByText("Obtener cita aleatoria"));
        });
        expect(await screen.findByText("CARGANDO...")).toBeInTheDocument();
    });

    it("should render loading when click the character button", async () => {
        render(<Cita />);
        const input = screen.getByPlaceholderText("Ingresa el nombre del autor");
        userEvent.type(input, "Milhouse");
        await waitFor(() => {
            userEvent.click(screen.getByText("Obtener Cita"));
        });
        expect(await screen.findByText("CARGANDO...")).toBeInTheDocument();
    });

    it("should render character quote when click button with a valid input value", async () => {
        render(<Cita />);
        const input = screen.getByPlaceholderText("Ingresa el nombre del autor");
        userEvent.type(input, "Milhouse");
        await waitFor(() => {
            userEvent.click(screen.getByText("Obtener Cita"));
        });
        expect(
            await screen.findByText("But my mom says I'm cool.")
        ).toBeInTheDocument();
    });

    it("should render error when invalid input", async () => {
        render(<Cita />);
        const input = screen.getByPlaceholderText("Ingresa el nombre del autor");
        userEvent.type(input, "1");
        await waitFor(() => {
            userEvent.click(screen.getByText("Obtener Cita"));
        });
        expect(
            await screen.findByText("Por favor ingrese un nombre válido")
        ).toBeInTheDocument();
    });
});