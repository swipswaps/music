<div class="view-container" id="folders-area" ng-show="!loading && !loadingCollection">
	<div class="playlist-area" id="folder-{{ ::folder.id }}" ng-repeat="folder in folders | limitTo: incrementalLoadLimit">
		<list-heading 
				level="1"
				heading="folder.name || '(root folder)' | translate"
				on-click="onFolderTitleClick"
				get-draggable="getFolderDraggable"
				model="folder"
				tooltip="folder.path"
				show-play-icon="true">
		</list-heading>
		<track-list
				tracks="folder.tracks"
				get-track-data="getTrackData"
				play-track="onTrackClick"
				show-track-details="showSidebar"
				get-draggable="getTrackDraggable"
				collapse-limit="10"
				more-text="'Show all {{ folder.tracks.length }} songs …' | translate"
				less-text="'Show less …' | translate"
				details-text="'Details' | translate">
		</track-list>
	</div>

	<alphabet-navigation ng-if="folders && folders.length" item-count="folders.length"
		get-elem-title="getFolderName" get-elem-id="getFolderElementId" scroll-to-target="scrollToItem">
	</alphabet-navigation>
</div>