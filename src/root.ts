import {
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent,
  CommentAdded as CommentAddedEvent,
  PostAdded as PostAddedEvent,
  ProfileFollowed as ProfileFollowedEvent,
  ProfileNFTMinted as ProfileNFTMintedEvent,
  Transfer as TransferEvent
} from "../generated/Root/Root"
import {
  Approval,
  ApprovalForAll,
  CommentAdded,
  PostAdded,
  ProfileFollowed,
  ProfileNFTMinted,
  Transfer
} from "../generated/schema"

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.approved = event.params.approved
  entity.tokenId = event.params.tokenId
  entity.save()
}

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  let entity = new ApprovalForAll(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.operator = event.params.operator
  entity.approved = event.params.approved
  entity.save()
}

export function handleCommentAdded(event: CommentAddedEvent): void {
  let entity = new CommentAdded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.commentAdded_content = event.params.commentAdded.content
  entity.commentAdded_authorId = event.params.commentAdded.authorId
  entity.commentAdded_date = event.params.commentAdded.date
  entity.postId = event.params.postId
  entity.save()
}

export function handlePostAdded(event: PostAddedEvent): void {
  let entity = new PostAdded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.postAdded_title = event.params.postAdded.title
  entity.postAdded_content = event.params.postAdded.content
  entity.postAdded_picture = event.params.postAdded.picture
  entity.postAdded_video = event.params.postAdded.video
  entity.postAdded_authorId = event.params.postAdded.authorId
  entity.postAdded_date = event.params.postAdded.date
  entity.save()
}

export function handleProfileFollowed(event: ProfileFollowedEvent): void {
  let entity = new ProfileFollowed(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.follower = event.params.follower
  entity.followed = event.params.followed
  entity.save()
}

export function handleProfileNFTMinted(event: ProfileNFTMintedEvent): void {
  let entity = new ProfileNFTMinted(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.sender = event.params.sender
  entity.profileId = event.params.profileId
  entity.memberData_username = event.params.memberData.username
  entity.memberData_profilePicture = event.params.memberData.profilePicture
  entity.memberData_followers = event.params.memberData.followers
  entity.memberData_posts = event.params.memberData.posts
  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.tokenId = event.params.tokenId
  entity.save()
}
