function solve(command) {

    let actions = {
        upvote: () => this.upvotes++,
        downvote: () => this.downvotes++,
        score: () => {
            let upvotes = this.upvotes;
            let downvotes  = this.downvotes;
            let totalVotes = upvotes + downvotes;
            let totalScore = upvotes - downvotes;
            let rating;
            let balance = upvotes / totalVotes;
            if (totalVotes < 10) {
                rating = 'new';
            } else if (upvotes / totalVotes > 0.66) {
                rating = "hot";
            } else if (totalScore >= 0 && totalVotes > 100) {
                rating = "controversial";
            } else if (totalScore < 0) {
                rating = "unpopular";
            } else {
                rating = "new";
            }

            if (totalVotes > 50) {
                let obfuscated = Math.ceil(0.25 * Math.max(upvotes, downvotes));
                return [upvotes + obfuscated, downvotes + obfuscated, totalScore, rating];
            }
            return [upvotes, downvotes, totalScore, rating];
        }
    };

    return actions[command]();
}
