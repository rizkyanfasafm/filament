<x-filament-actions::group
    :actions="$getActions()"
    :dark-mode="config('filament-actions.dark_mode')"
    :color="$getColor()"
    :icon="$getIcon()"
    :label="$getLabel()"
    :size="$getSize()"
    :tooltip="$getTooltip()"
/>
