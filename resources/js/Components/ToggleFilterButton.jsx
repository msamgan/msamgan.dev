import PrimaryButton from '@/Components/PrimaryButton.jsx'

export default function ToggleFilterButton({ showFilters, setShowFilters }) {
    return (
        <PrimaryButton onClick={() => setShowFilters(!showFilters)}>
            <i className="ri-filter-line text-sm"></i>
        </PrimaryButton>
    )
}
