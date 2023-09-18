import { render, screen, within } from "@testing-library/react";
import UserList from "./UserList";

test("should render one row per user", () => {
  const users = [
    { name: "ankit", email: "ankit@gmail.com" },
    { name: "gulshan", email: "gulshan@gmail.com" },
  ];

  render(<UserList users={users} />);

  const rows = within(screen.getByTestId("users")).getAllByRole("row");

  expect(rows).toHaveLength(2);
});

test("should render the email and name of each user", () => {
    const users = [
        { name: "ankit", email: "ankit@gmail.com" },
        { name: "gulshan", email: "gulshan@gmail.com" },
      ];
    
      render(<UserList users={users} />);

      users.forEach(user => {
        const name = screen.getByRole('cell', { name: user.name })
        const email = screen.getByRole('cell', { email: user.email })

        expect(name).toBeInTheDocument();
        expect(email).toBeInTheDocument();
      });
});
