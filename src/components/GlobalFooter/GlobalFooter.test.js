import { render, screen } from "@testing-library/react"
import GlobalFooter from "."

const hrefs = [
    { testId: 'linkedin-link', href: "https://www.linkedin.com/in/brian-hoscheit-3822a59a" },
    { testId: 'github-link', href: "https://github.com/bhoscheit-git" }
]

describe("GlobalFooter", () => {
    beforeEach(() => {
        render(<GlobalFooter />)
    })
    it.each(hrefs)("should have the expected links", ({testId, href}) => {
        expect(screen.getByTestId(testId)).toHaveAttribute("href", href)
    })
})
